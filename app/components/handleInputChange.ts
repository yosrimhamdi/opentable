export default (
  e: React.ChangeEvent<HTMLInputElement>,
  form: any,
  setForm: any
) => {
  e.preventDefault();
  setForm({ ...form, [e.target.name]: e.target.value });
};
