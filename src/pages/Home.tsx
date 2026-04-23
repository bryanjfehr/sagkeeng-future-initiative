import Hero from '../components/Hero'
import ReportSection from '../components/ReportSection'
import HumanCostGallery from '../components/HumanCostGallery'
import ActionCenter from '../components/ActionCenter'
import FloatingNav from '../components/FloatingNav'
import VisitorCounter from '../components/VisitorCounter'
import { reportData } from '../data/reportData'
import type { ReportSection as ReportSectionType } from '../data/reportData'

const Home = () => {
  return (
    <>
      <FloatingNav />
      <Hero />
      <div className="bg-white">
        {reportData.map((section: ReportSectionType) => (
          <ReportSection key={section.id} section={section} />
        ))}
      </div>
      <HumanCostGallery />
      <ActionCenter />
      <VisitorCounter />
    </>
  )
}

export default Home
