import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { error } from '@pnotify/core/dist/PNotify';

export default function () {
  error({
    title: 'Найдено слишком много совпадений. Введите более конкретный запрос.',
    delay: 1000,
  });
}
