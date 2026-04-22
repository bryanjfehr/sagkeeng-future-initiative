import Hero from '../components/Hero'
import ReportSection from '../components/ReportSection'
import HumanCostGallery from '../components/HumanCostGallery'
import ActionCenter from '../components/ActionCenter'
import { reportData } from '../data/reportData'
import type { ReportSection as ReportSectionType } from '../data/reportData'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-white">
        {reportData.map((section: ReportSectionType) => (
          <ReportSection key={section.id} section={section} />
        ))}
      </div>
      <HumanCostGallery />
      <ActionCenter />
    </>
  )
}

export default Home
