import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import supabase from '../../supabase';
import "./signUp.scss";


function SignUp() {
    const { register, handleSubmit, getValues, formState: { errors }, } = useForm();

    const onSubmit = async () => {

        try {
          const { data, error } = await supabase.auth.signUp({
            email: getValues('email'),
            password: getValues('password'),
            firstName: getValues('firstName'),
            lastName: getValues('lastName'),
          });
    
          if (error) {
            console.error('Error signing up:', error.message);
          } else {
            console.log('User signed up successfully:', data);
          }
        } catch (error) {
          console.error('Unexpected error:', error.message);
        }
      };

    return (
        <div className="form-page">
            <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                <h4 className="form-header">Create an Account to make and see your appointments</h4>

                <input
                    type="text"
                    id="firstName"
                    placeholder='first name...'
                    {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <span className="error">{errors.firstName.message}</span>}

                <input
                    type="text"
                    id="lastName"
                    placeholder='last name...'
                    {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <span className="error">{errors.lastName.message}</span>}

                <input
                    type="email"
                    id="email"
                    placeholder='janedoe23@gmail.com'
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Enter a valid email address",
                        },
                    })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    })}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}

                <input
                    type="password"
                    id="passwordConfirm"
                    placeholder="confirm password"
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value) =>
                            value === getValues().password || "Passwords must be the same",
                    })}
                />
                {errors.passwordConfirm && (
                    <span className="error">{errors.passwordConfirm.message}</span>
                )}

                <input type="submit" value="Create Account" />
                <span>
                    Already have an account?
                    <Link to="/features/authentication/signin">Sign In</Link>
                </span>
                <Link to="/">Go to homepage</Link>

            </form>
        </div>
    );
}

export default SignUp;
