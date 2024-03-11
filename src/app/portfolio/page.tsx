'use client'
import { ArrowPathIcon, QuestionMarkCircleIcon, BuildingOffice2Icon, SunIcon, WrenchScrewdriverIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { timeline, certs, languages1, languages2, aws, skills } from '@/components/Portfolio'
import * as Socials from '@/components/LinksAndIcons'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'; 

export default function Home() {
  const recaptcha = useRef(null) as any
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_CAPTCHA_V2_SITE_KEY ?? ''

  const handleSubmit = async (event: { preventDefault: () => void; target: any; }) => {
    setStatus("PENDING")
    event.preventDefault()

    const captchaValue = recaptcha.current.getValue()

    const form = event.target

    const payload = {
      email: form.email.value,
      name: form.name.value,
      message: form.comment.value,
      referPage: 'portfolio',
      token: captchaValue
    }

    console.log(payload)

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
        }
      })

      const json = await response.json()

      if (json.data == 200) {
        console.log(json.data)
        setStatus("SUCCESS")
        return
      }

      setStatus("ERROR")
    } catch (err) {
      console.log(err);
      setStatus("ERROR")
    }
    recaptcha.current.reset();
  }
  
  return (
    <div className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2">
            <div className='grid-cols-1'>
              <div className="grid grid-rows-1 font-bold text-3xl text-left mb-2 flex-wrap">
                Ryan <br className="lg:hidden md:hidden sm:hidden" /> Russell
              </div>
              <div className="grid-rows-1 font-bold text-xl text-left">
                AWS Specialist, <br className="lg:hidden" />DevOps Guru, <br className="lg:hidden" />Hobbyist
              </div>
            </div>
            <div className='grid-cols-1'>
              <div className='flex justify-end items-center space-x-10 mt-3'>
                {Socials.portfolio.map((item) => (
                  <a key={item.name} href={item.href} target={item.target} className="text-gray-500 dark:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-12 w-12" aria-hidden="true" />
                  </a>
                ))}
                <a href='#'
                  onClick={() => setOpen(true)}
                >
                  <EnvelopeIcon className="menu h-12 items-center justify-center stroke-gray-500 dark:stroke-gray-300" />
                </a>
              </div>
            </div>
          </div>
        <div className="w-full border-2 lines mt-4 mb-8" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-16 gap-12 items-center justify-center">
          <div className="grid-cols-1 mb-1">
            <div className="flow-root">
              <div>
                <p>Ryan is an experienced cloud engineer based out of Sacramento, CA. He has extensive experience with AWS and has spent the majority of his professional career improving and honing his skills.</p>
              </div>
              <div className="mt-4">
                <p>He spent 3 years as a consultant for Slalom and gained a lot of experience working with a wide range of clients across several regulated industries.</p>
              </div>
              <div className="mt-4">
                <p>Ryan now works as an independent consultant, working closely with technology companies to design and build out critical infrastructure in AWS.</p>
              </div>
              <div className="mt-4">
                <p>In January of 2024 he launched Bright Wrench Design, a small online shop for hobby items that he&#39;s created.</p>
              </div>
            </div>
          </div>
          <div className="flow-root mx-14">
            <div className="flex items-center justify-center">
              <QuestionMarkCircleIcon className="h-16 mb-6 items-center justify-center" />
            </div>
            <p className="text-lg font-bold text-center mb-2">Looking for an AWS Pro?</p>
            <p className="text-center mb-4">I am available for AWS Cloud and DevOps related projects!</p>
            <div className="flex justify-center">
              <a href={process.env.NEXT_PUBLIC_CONSULT_URI} target="_blank">
                <button
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-10 py-3 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Schedule a consultation!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t lines" />
        <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-16 gap-16">
          <div className="grid-cols-1 mb-20 flex justify-center">
            <div className="flow-root">
              <div className="relative max-w-lg">
                <div className="flex justify-center items-center">
                  <SunIcon className="h-16 mb-10" />
                </div>
                <p className="text-3xl font-bold text-center mb-7">Certifications & Training</p>
                <div className="flex justify-center grid-cols-1">
                  <ul role="list" className="mx-6">
                    {certs && certs.map((z) => (
                      <li key={z} className="mt-1 li-bullet text-lg">{z}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative max-w-xl">
                <div className="flex justify-center">
                  <ComputerDesktopIcon className="h-12 mb-8 mt-10" />
                </div>
                <p className="text-3xl font-bold text-center mb-7">Languages</p>
                <div className="grid grid-cols-2">
                  <div className="flex items-center justify-end grid-cols-1">
                    <ul role="list" className="mx-6">
                      {languages1 && languages1.map((z) => (
                        <li key={z} className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap justify-center grid-cols-1">
                    <ul role="list" className="">
                      {languages2 && languages2.map((z) => (
                        <li key={z} className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative max-w-lg">
                <div className="flex justify-center items-center">
                  <WrenchScrewdriverIcon className="h-12 mb-8 mt-10" />
                </div>
                <p className="text-3xl font-bold text-center mb-7">Tools & Skills</p>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center grid-cols-1">
                    <ul role="list" className="">
                      {aws && aws.map((z) => (
                        <li key={z} className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end flex-wrap grid-cols-1">
                    <ul role="list">
                      {skills && skills.map((z) => (
                        <li key={z} className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 mx-10">
            <div className="flow-root">
              <div className="flex justify-center items-center">
                <BuildingOffice2Icon className="h-16 mb-12" />
              </div>
              <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
                      {eventIdx !== timeline.length - 1 ? (
                        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex space-x-3 grid-cols-2">
                        <div>
                          { event.icon && <span
                            className="dark:bg-gray-300 bg-gray-900 h-8 w-8 rounded-full flex items-center justify-center"
                          >
                            {<event.icon className="h-5 w-5 text-white dark:text-black" aria-hidden="true" />}
                          </span>}

                          { !event.icon && <span
                            className="bg-black dark:bg-white my-2 mx-2.5 h-3 w-3 rounded-full flex items-center justify-center"
                          >
                            {<div className="h-5 w-5 text-white" aria-hidden="true" />}
                          </span>}
                          
                        </div>
                        <div className="grid">
                          <div className="grid-rows-1 text-lg text-left font-bold">
                              { event.href && <a href={event.href} target="_blank" className="inline-links">{event.company}</a> } { !event.href && <span>{event.company}</span> } {event.location && <span className="text-md font-normal mx-2">|</span>} {event.location && <span className="text-sm font-normal mx-0">{event.location}{" "}</span>}
                          </div>
                          <div className="grid-rows-1 whitespace-nowrap text-left text-medium dark:text-gray-300 text-gray-600">
                            <time dateTime={event.datetime}>{event.date}</time>
                          </div>
                          <div className="grid-rows-1 text-left text-medium dark:text-gray-300 text-gray-600">
                            {event.title}{" "}
                          </div>
                          <div className="grid-rows-1 text-md dark:text-gray-300 text-gray-600 mt-2 flex-wrap">
                            <p>
                              {event.comment}
                            </p>
                          </div>
                          <div className="grid-rows-1 text-sm dark:text-gray-300 text-gray-600 mt-2 flex-wrap">
                            <ul>
                              {event.bullets && event.bullets.map((z) => (
                                <li key={z} className="mt-1 li-bullet">{z}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                      Send me an message
                    </Dialog.Title>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <div className="mt-2">
                            <div>
                              <label htmlFor="name" className="sr-only">
                                Name
                              </label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Name"
                              />
                            </div>
                          </div>
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
                          <div className="mt-2">
                            <label htmlFor="comment" className="sr-only">
                              Message
                            </label>
                            <textarea
                              rows={4}
                              name="comment"
                              id="comment"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder={'Message'}
                            />
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                          {status === null && (
                            <>
                              <div className="flex justify-center items-center mb-6">
                                <ReCAPTCHA ref={recaptcha} sitekey={CAPTCHA_SITE_KEY} className="g-recaptcha" />
                              </div>
                              <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Send
                              </button>
                              <button
                                type="button"
                                className="mt-2 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                onClick={() => setOpen(false)}
                              >
                                Cancel
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
                                Message Sent!
                              </button>
                              <button
                                type="button"
                                className="mt-2 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                onClick={() => setOpen(false)}
                              >
                                Close
                              </button>
                            </>
                          )}
                          {status === "PENDING" && (
                            <>
                              <button
                                disabled={true}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                <ArrowPathIcon className="h-6 items-center justify-center" />
                              </button>
                              <button
                                type="button"
                                className="mt-2 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                onClick={() => setOpen(false)}
                              >
                                Cancel
                              </button>
                            </>
                          )}
                          {status === "ERROR" && (
                            <>
                              <div className="flex justify-center items-center mb-6">
                                <ReCAPTCHA ref={recaptcha} sitekey={CAPTCHA_SITE_KEY} className="g-recaptcha" />
                              </div>
                              <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Oops! We encountered an error. Please try again.
                              </button>
                              <button
                                type="button"
                                className="mt-2 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                onClick={() => setOpen(false)}
                              >
                                Close
                              </button>
                            </>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}