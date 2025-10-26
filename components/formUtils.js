// Helper function: given a form DOM element, return { name, email }
export function getFormValues(formElement) {
  if (!formElement || typeof FormData === 'undefined') return { name: '', email: '' };
  try {
    const fd = new FormData(formElement);
    return {
      name: fd.get('name') ? String(fd.get('name')) : '',
      email: fd.get('email') ? String(fd.get('email')) : ''
    };
  } catch {
    return { name: '', email: '' };
  }
}
