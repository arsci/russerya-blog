import { QuestionMarkCircleIcon, BuildingOffice2Icon, SunIcon, WrenchScrewdriverIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'
import { timeline, certs, languages1, languages2, aws, skills } from '@/components/Portfolio'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="font-bold text-3xl text-left mb-8">
          Cloud Specialist, DevOps Guru, Hobbyist
          <div className="w-full border-2 lines mt-4" />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-16 gap-12 items-center justify-center">
          <div className="grid-cols-1 mb-1">
            <div className="flow-root">
              <div>
                <p>Ryan is an experienced cloud engineer based out of Sacramento, CA. He has extensive experience with AWS and has spent the majority of his professional career improving and honing his skills.</p>
              </div>
              <div className="mt-4">
                <p>He spend 3 years working as a consultant for Slalom and gained a lot of experience working with a wide range of clients across several regulated industries.</p>
              </div>
              <div className="mt-4">
                <p>Ryan now works as an independent consultant, working closely with technology companies to design and build out critical infrastructure in AWS.</p>
              </div>
              <div className="mt-4">
                <p>In January of 2024 he launched Bright Wrench Design, a small online shop for hobby items that he's created.</p>
              </div>
            </div>
          </div>
          <div className="flow-root mx-14">
            <div className="flex items-center justify-center">
              <QuestionMarkCircleIcon className="h-16 mb-6 items-center justify-center" />
            </div>
            <p className="text-lg font-bold text-center mb-2">Looking for help with AWS or DevOps?</p>
            <p className="text-center mb-4">I am available on an hourly basis for cloud engineering, AWS architecture, and DevOps work</p>
            <div className="flex justify-center">
              <a href="https://calendly.com/ryan-brightwrenchdesign/30min" target="_blank">
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
                  <ul role="list" className="-mb-8 mx-6">
                    {certs && certs.map((z) => (
                      <li className="mt-1 li-bullet text-lg">{z}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative max-w-lg">
                <div className="flex justify-center">
                  <ComputerDesktopIcon className="h-12 mb-8 mt-20" />
                </div>
                <p className="text-3xl font-bold text-center mb-7">Languages</p>
                <div className="grid grid-cols-2">
                  <div className="flex items-center justify-center grid-cols-1">
                    <ul role="list" className="-mb-8 mx-6">
                      {languages1 && languages1.map((z) => (
                        <li className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center grid-cols-1">
                    <ul role="list" className="-mb-8 mx-6">
                      {languages2 && languages2.map((z) => (
                        <li className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative max-w-lg">
                <div className="flex justify-center items-center">
                  <WrenchScrewdriverIcon className="h-12 mb-8 mt-20" />
                </div>
                <p className="text-3xl font-bold text-center mb-7">Tools & Skills</p>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center grid-cols-1">
                    <ul role="list" className="-mb-8 mx-6">
                      {aws && aws.map((z) => (
                        <li className="mt-1 li-bullet">{z}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-right grid-cols-1">
                    <ul role="list" className="-mb-8 mx-6">
                      {skills && skills.map((z) => (
                        <li className="mt-1 li-bullet">{z}</li>
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
                            className='dark:bg-gray-300 bg-gray-900 h-8 w-8 rounded-full flex items-center justify-center'
                          >
                            {<event.icon className="h-5 w-5 text-white dark:text-black" aria-hidden="true" />}
                          </span>}

                          { !event.icon && <span
                            className='bg-black dark:bg-white my-2 mx-2.5 h-3 w-3 rounded-full flex items-center justify-center'
                          >
                            {<div className="h-5 w-5 text-white" aria-hidden="true" />}
                          </span>}
                          
                        </div>
                        <div className="grid">
                          <div className="grid-rows-1 text-lg text-left font-bold">
                              { event.href && <a href={event.href} target="_blank" className="inline-links">{event.company}</a> } { !event.href && <span>{event.company}</span> } {event.location && <span className='text-md font-normal mx-2'>|</span>} {event.location && <span className='text-sm font-normal mx-0'>{event.location}{' '}</span>}
                          </div>
                          <div className="grid-rows-1 whitespace-nowrap text-left text-medium dark:text-gray-300 text-gray-600">
                            <time dateTime={event.datetime}>{event.date}</time>
                          </div>
                          <div className="grid-rows-1 text-left text-medium dark:text-gray-300 text-gray-600">
                            {event.title}{' '}
                          </div>
                          <div className="grid-rows-1 text-md dark:text-gray-300 text-gray-600 mt-2 flex-wrap">
                            <p>
                              {event.comment}
                            </p>
                          </div>
                          <div className="grid-rows-1 text-sm dark:text-gray-300 text-gray-600 mt-2 flex-wrap">
                            <ul>
                              {event.bullets && event.bullets.map((z) => (
                                <li className="mt-1 li-bullet">{z}</li>
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
    </div>
  )
}