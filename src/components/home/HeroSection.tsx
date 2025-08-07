import Button from "../common/Button";

function HeroSection() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              더 엄청난 기능을 보려면{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                이걸 눌러라. <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              엄청난 디지털 왕국. 고양이만 출입가능.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              내 사진. 내 일기. 내 모든 것. 모두 여기에.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="primary" size="medium">
                Get started
              </Button>
              <Button variant="ghost" size="medium">
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection