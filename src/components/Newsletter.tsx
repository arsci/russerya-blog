'use client'
import { useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function NewsletterFormStacked() {

  const [status, setStatus] = useState<string | null>(null)
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const recaptcha = useRef()

  const referrer = useSearchParams().get('referrer') || 'unknown/direct'

  const handleSubmit = async (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault()
    const form = event.target

    const payload = {
      email: form.email.value,
      referrer,
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        }
      })

      const json = await response.json()

      if (json.data == 200) {
        setStatus("SUCCESS")
        return
      }

      setStatus("ERROR")
    } catch (err) {
      setRefreshReCaptcha(!refreshReCaptcha);
      console.log(err);
      setStatus("ERROR")
    }
  }

  const setTokenFunc = (getToken: any) => {
    setToken(getToken);
  };

  return (
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="mt-2">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
          </div>
        </div>
        <div>
          {status === null && (
            <>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </>
          )}
          {status === "SUCCESS" && (
            <>
              <button
                disabled={true}
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Success! Welcome to the email list!
              </button>
            </>
          )}
          {status === "ERROR" && (
            <>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Oops, we encountered an error. Please try again.
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export function NewsletterMain() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Get notified of new posts!
        </h2>
        <h4 className="text-center text-m leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign up to join the email list
        </h4>
      </div>
      <NewsletterFormStacked />
    </div>
  )
}

export function NewsletterSeries() {
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
        <div className="w-full border-t lines mt-10" />
        <div className="md:mx-auto md:w-full md:max-w-md">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              Want to get notified when the next part in this series is released?
          </h2>
          <h4 className="text-center text-m leading-9 tracking-tight text-gray-900 dark:text-white">
              Sign up to join the email list!
          </h4>
        </div>
        <NewsletterFormStacked />
        <div className="w-full border-t lines mt-10" />
      </div>
  )
}

export function NewsletterCurious() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="w-full border-t lines mt-10" />
      <div className="md:mx-auto md:w-full md:max-w-md">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Curious about the next project?
        </h2>
        <h4 className="text-center text-m leading-9 tracking-tight text-gray-900 dark:text-white">
            Join the email list to get notified about new posts!
        </h4>
      </div>
      <NewsletterFormStacked />
      <div className="w-full border-t lines mt-10 mb-10" />
    </div>
)
}


