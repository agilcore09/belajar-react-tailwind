import Input from '../Elements/Input/Input';
import Button from '../Elements/Button/Button'

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-500">Register</h1>
                <p className='font-medium text-slate-500'>Welcome Please Enter Your Secret Number & Join With Permata Bank</p>
                <form action="" className='mt-5'>
                    <Input type="text" placeholder="John" label="First Name" />
                    <Input type="text" placeholder="Doe" label="Last Name" />
                    <Input type="email" placeholder="foo@gmail.com" label="Email" />
                    <Input type="password" placeholder="Enter Your Secret Number" label="Password" />
                    <Button />
                </form>
            </div>
        </div>
    );
}

export default Register;