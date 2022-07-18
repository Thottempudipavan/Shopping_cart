import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter();

  const handleFormAction = (event) => {
    event.preventDefault();
    // authentication from the backend
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto flex">
        <div className="pl-20">
          <div className="text-3xl font-bold pt-20">Login</div>
          <div className="pt-10">Get access to your Orders, Wishlist and Recommendations</div>
        </div>
        <form onSubmit={handleFormAction}>
          <div className="flex flex-col p-10 pl-13 w-[50rem]">
            <input required={true} type="email" placeholder='Email' className="pt-10" />
            <input required={true} type="password" placeholder='Password' className="pt-20" />
            <button type='submit' className='text-black bg-yellow-800 p-2 font-extralight mt-10'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}
