import { provide, inject, type ComponentInternalInstance } from 'vue';
import type { FormActionType } from '../types/form';

const key = Symbol('schema-form');

export function createFormContext(instance: ComponentInternalInstance) {
  provide(key, instance.proxy);
}

export function useFormContext() {
  return inject(key) as FormActionType;
}
