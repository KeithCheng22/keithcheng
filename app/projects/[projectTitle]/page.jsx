'use client'
import { useParams, notFound } from 'next/navigation'
import { projects } from '../projects'
import Button from '@/app/components/Button'


const Project = () => {
    const params = useParams()
    const rawProjectTitle = params.projectTitle
    const projectTitle = rawProjectTitle.includes('%20') ? rawProjectTitle.split('%20')[0] + " " +rawProjectTitle.split('%20')[1] : rawProjectTitle
    const projectDetails = projects.filter(project => project.title == projectTitle)
    if (projectDetails.length === 0) {
        notFound()
    }

    const {title, techStack, date, demo, img, objectives, challenges, learning} = projectDetails[0]

  return (
    <section className="w-[80%] mt-10 mx-auto py-8 max-w-[1200px] min-h-[70vh] border border-slate-500 rounded-md bg-white/10 backdrop-blur shadow-xl">
        <main className='w-[90%] mx-auto'>
            <header>
                <div className='mb-5'>
                    <Button title='Back' link='/projects' blank='true'/>
                </div>
                <h1 className='font-semibold text-3xl md:text-6xl'>{title}</h1>
                <p className='mt-1 text-yellow-400 font-lg font-bold'>{techStack}</p>
                <p className='mt-5'>{date}</p>
                <hr className='opacity-50'/>
            </header>

            <section className='mt-5'>
                <img src={`${img}`} alt={`Project ${projectTitle}`} className='rounded-md'></img>
                <h1 className='font-semibold text-3xl md:text-6xl mt-4'>Objectives</h1>
                <p className='prose prose-invert mt-2'>{objectives}</p>

                <h1 className='font-semibold text-3xl md:text-6xl mt-4'>Challenges</h1>
                <p className='prose prose-invert mt-1'>{challenges}</p>

                <h1 className='font-semibold text-3xl md:text-6xl mt-4'>Learning Outcomes</h1>
                <p className='prose prose-invert mt-1'>{learning}</p>
            </section>

            <aside className='mt-5'>
                {demo !== '' && <Button title='Demo' link={demo} blank='' />}
            </aside>
            
        </main>
    </section>
  )
}

export default Project