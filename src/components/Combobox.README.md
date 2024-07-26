# Combobox

Built with the Downshift `useCombobox()` hook: https://www.downshift-js.com/use-combobox

```tsx
import { Combobox } from '@pagoda/ui/src/components/Combobox';

...

<Combobox
  label="My Combobox"
  name="myCombobox"
  items={[
    {
      value: 'Item A',
    },
    {
      value: 'Item B',
    },
    {
      value: 'Item C',
    },
  ]}
  value={myCombobox}
  onChange={setMyCombobox}
/>
```
