import UserContributionToGrid from "./ContributionGrid/userContributionToGrid"
import contact from '../data/contact'

function GithubStatus() {
    return (
        <div id="github-status" className='px-12 pt-10'>
            <h3 className="font-Truculenta text-dark text-center
                    text-3xl md:text-4xl -mb-2">
                <a href={contact[0].link}>My Github Status</a>
            </h3>
            <div className="flex justify-between items-center mx-3 mb-6 md:mx-28">
                <h5 className="font-Truculenta text-lg md:text-2xl">2024</h5>
                <div className="flex gap-1">
                    <div className={'grid-sq bg-grid-0'}></div>
                    <div className={'grid-sq bg-grid-1'}></div>
                    <div className={'grid-sq bg-grid-2'}></div>
                    <div className={'grid-sq bg-grid-3'}></div>
                    <div className={'grid-sq bg-grid-4'}></div>
                </div>
            </div>
            <a href={contact[0].link} className='flex flex-wrap justify-center gap-5 px-2 md:px-20' >
                <UserContributionToGrid />
            </a>
        </div>
    )
}

export default GithubStatus