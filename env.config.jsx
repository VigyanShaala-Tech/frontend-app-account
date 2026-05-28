import React from "react";
import {PLUGIN_OPERATIONS, DIRECT_PLUGIN} from "@openedx/frontend-plugin-framework";

const getPluginSlots = () => {
  return {
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
};

const config = {
  ...process.env,
  get pluginSlots() {
    return getPluginSlots();
  },
};

export default config;