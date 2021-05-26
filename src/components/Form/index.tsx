//  例
// <Form>
//   <InputField>
// </Form>

type Props = {
  action: string;
  children: JSX.Element | JSX.Element[];
  onSubmit: () => null;
};

const Form = (props: Props): JSX.Element => {
  const { action, children } = props;

  return (
    <form
      action={action}
      onSubmit={(event) => {
        props.onSubmit();
        event.preventDefault();

        return false;
      }}
    >
      {children}
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
