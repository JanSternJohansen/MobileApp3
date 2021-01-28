import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.ObsArray',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;