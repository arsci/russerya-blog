 
export default function MessageBubble() {
  return (
    <div className="inset-x-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 mt-5">
      <div className="flex items-center justify-between gap-x-6 bg-gray-900 dark:bg-gray-300 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white dark:text-gray-900">
          <a href="/about-me">
            <strong className="font-semibold">Looking for an AWS Consultant?</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            I am available for AWS Cloud and DevOps related projects!&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  )
}