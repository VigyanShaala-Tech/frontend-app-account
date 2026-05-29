from tutor import hooks
from tutormfe.hooks import PLUGIN_SLOTS

hooks.Filters.ENV_PATCHES.add_item(
    (
        "mfe-env-config-runtime-definitions-account",
        """
        // This file contains configuration for plugins and environment variables.
const { PLUGIN_OPERATIONS, DIRECT_PLUGIN } = await import('@openedx/frontend-plugin-framework');
{% raw %}
config = {
  ...config,
  ...process.env,
}
config.pluginSlots = {
  remove_profile_info_plugin_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'remove_profile_info_plugin_slot',
          type: DIRECT_PLUGIN,
          priority: 1,
          RenderWidget: () => null,
        },
      },
    ],
  },
  remove_social_media_plugin_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'remove_social_media_plugin_slot',
          type: DIRECT_PLUGIN,
          priority: 1,
          RenderWidget: () => null,
        },
      },
    ],
  },
};
{% endraw %}
"""
    ))