"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

const print = (x) => strapi.log.info(JSON.stringify(x, null, 2));

module.exports = async () => {
  strapi.log.info("bootstrapping");

  await initializeAdmin();

  await initializeRole({
    type: "authenticated",
    name: "Organizer",
    description: "Basically an Admin role",
  });

  await initializeRole({
    type: "speaker",
    name: "Speaker",
    description:
      "Default role given to authenticated user.\nSpeakers have should have access to edit only their own data (ie, user or talks)",
  });

  await setDefaultRole();

  await setPermission("public", "application", "event", "find", true);
  await setPermission("public", "application", "event", "findone", true);
  await setPermission("public", "application", "talk", "find", true);
  await setPermission("public", "application", "talk", "findone", true);

  await setPermission("speaker", "application", "event", "find", true);
  await setPermission("speaker", "application", "event", "findone", true);
  await setPermission("speaker", "application", "talk", "find", true);
  await setPermission("speaker", "application", "talk", "findone", true);
  await setPermission("speaker", "application", "talk", "create", true);

  await setPermission("authenticated", "users-permissions", "user", "find", true);
  await setPermission("authenticated", "users-permissions", "user", "create", true);
  await setPermission("authenticated", "users-permissions", "user", "destroy", true);

  await setPermission("authenticated", "application", "event", "count", true);
  await setPermission("authenticated", "application", "event", "create", true);
  await setPermission("authenticated", "application", "event", "delete", true);
  await setPermission("authenticated", "application", "event", "find", true);
  await setPermission("authenticated", "application", "event", "findone", true);
  await setPermission("authenticated", "application", "event", "update", true);

  await setPermission("authenticated", "application", "talk", "count", true);
  await setPermission("authenticated", "application", "talk", "create", true);
  await setPermission("authenticated", "application", "talk", "delete", true);
  await setPermission("authenticated", "application", "talk", "find", true);
  await setPermission("authenticated", "application", "talk", "findone", true);
  await setPermission("authenticated", "application", "talk", "update", true);
};

async function initializeAdmin() {
  const admin = await strapi.query("user", "admin").findOne({ username: "admin" });

  if (!admin) {
    strapi.log.info(`creating admin user`);

    const superAdminRole = await strapi.admin.services.role.getSuperAdmin();

    await strapi.query("user", "admin").create({
      username: 'admin',
      email: process.env.ADMIN_EMAIL,
      password: await strapi.admin.services.auth.hashPassword(
        process.env.ADMIN_PASSWORD
      ),
      roles: [superAdminRole.id],
      isActive: true,
    });
  }
}

async function initializeRole(initialObject) {
  const roleModel = strapi.query("role", "users-permissions");
  const { type } = initialObject;

  const role = await roleModel.findOne({ type });
  if (!role) {
    strapi.log.info(`creating ${type} role`);
    return roleModel.create(initialObject);
  }

  const shouldUpdate = role.name !== initialObject.name;
  if (shouldUpdate) {
    strapi.log.info(`updating ${type} role`);
    return roleModel.update({ id: role._id }, initialObject);
  }
}

async function setDefaultRole() {
  const pluginStore = await strapi.store({
    environment: "",
    type: "plugin",
    name: "users-permissions",
  });

  const options = await pluginStore.get({ key: "advanced" });

  if (options.default_role !== "speaker") {
    strapi.log.info(`updating default user role`);
    options.default_role = "speaker";
    pluginStore.set({ key: "advanced", value: options });
  }
}

async function setPermission(roleType, type, controller, action, enabled) {
  const roleModel = strapi.query("role", "users-permissions");
  const permissionModel = strapi.query("permission", "users-permissions");

  const role = await roleModel.findOne({ type: roleType });
  if (!role) return;

  const permission = await permissionModel.findOne({
    type,
    controller,
    action,
    role,
  });

  if (!permission) {
    strapi.log.info(
      `creating permission for ${roleType}, \t${controller}.${action} is ${
        enabled ? "enabled" : "disabled"
      }`
    );
    return permissionModel.create({
      type,
      controller,
      action,
      enabled,
      role,
      policy: "",
    });
  }

  if (permission.enabled !== enabled) {
    strapi.log.info(
      `updating permission for ${roleType}, \t${controller}.${action} is ${
        enabled ? "enabled" : "disabled"
      }`
    );
    return permissionModel.update(
      { type, controller, action, role },
      { enabled }
    );
  }
}
