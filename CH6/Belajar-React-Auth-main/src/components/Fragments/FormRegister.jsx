import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div className="overflow-y-scroll h-[200px] scrollbar pe-5">
        <InputForm
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="******"
        />
        <InputForm
          label="Confirm Password"
          name="Confirm password"
          type="password"
          placeholder="******"
        />
      </div>

      <Button classname="bg-blue-600 w-full mt-3">Register</Button>
    </form>
  );
};

export default FormRegister;
