import { CheckCircle, Icon, Info, Warning } from '@phosphor-icons/react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import type { Toast, ToastType } from './store';
import { useToasterStore } from './store';
import * as T from './Toast';

export function Toaster() {
  const toaster = useToasterStore();

  const iconsByType: Record<ToastType, Icon> = {
    info: Info,
    error: Warning,
    success: CheckCircle,
  };

  function onOpenChange(open: boolean, toast: Toast) {
    if (!open) toaster.close(toast);
  }

  return (
    <T.Provider duration={5000}>
      {toaster.toasts.map((toast) => {
        const type = toast.type || 'info';
        const IconSvg = toast.icon || iconsByType[type];

        return (
          <T.Root
            type={type}
            duration={toast.duration}
            open={toast.isOpen}
            onOpenChange={(open) => onOpenChange(open, toast)}
            key={toast.id}
          >
            <T.Icon icon={<IconSvg weight="bold" />} />

            <Flex stack gap="xs">
              {toast.title && <T.Title>{toast.title}</T.Title>}
              {toast.description && <T.Description>{toast.description}</T.Description>}
            </Flex>

            <T.Close />

            {toast.action && (
              <>
                <div />
                <div>
                  <T.Action altText={toast.actionText!} asChild>
                    <Button size="small" fill="outline" label={toast.actionText!} onClick={toast.action} />
                  </T.Action>
                </div>
                <div />
              </>
            )}
          </T.Root>
        );
      })}

      <T.Viewport />
    </T.Provider>
  );
}
