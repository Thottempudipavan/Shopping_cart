import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function checkPassword(password) {
    let oneLowerCaseLetter = /(?=.+[a-z])/;
    let oneUpperCaseLetter = /(?=.+[A-Z])/;
    let oneDigit = /(?=.+[0-9])/;
    let minimumSixCharacters = /(?=.{6,})/;
    let noSpace = /^\S*$/;

    let isValid =
      (oneLowerCaseLetter.test(password) ||
        oneUpperCaseLetter.test(password)) &&
      oneDigit.test(password) &&
      minimumSixCharacters.test(password) &&
      noSpace.test(password);

    return isValid
  }

  const correctFormAction = () => {
    setError("")
    router.push("/")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password and Confirm Password needs to be same.")
    } else {
      checkPassword(password) ? correctFormAction() :
        setError(`Password must: 1. Minimum length 6 characters
      2. Must have a number and alphabet
      3. Cannot have spaces`);
    }
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <div className="container mx-auto flex">
        <div className="pl-20">
          <div className="text-3xl font-bold pt-20">Signup</div>
          <div className="pt-10">We do not share your personal details with anyone.</div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col p-10 pl-13 w-[50rem]">
            <div className="text-red-500">{error}</div>
            <input required={true} value={firstName} onChange={event => setFirstName(event.target.value)} type="text" placeholder='First Name' className="pt-10" />
            <input required={true} value={lastName} onChange={event => setLastName(event.target.value)} type="text" placeholder='Last Name' className="pt-20" />
            <input required={true} value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder='Email' className="pt-20" />
            <input required={true} value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder='Password' className="pt-20" />
            <input required={true} value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} type="password" placeholder='Confirm Password' className="pt-20" />
            <button className='text-white bg-pink-800 p-2 font-extralight mt-10'>Signup</button>
          </div>
        </form>
      </div>
    </>
  )
}
