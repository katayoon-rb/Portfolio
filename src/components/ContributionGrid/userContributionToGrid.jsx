import { getGithubUserContribution } from './UserContribution.ts'

const data = await getGithubUserContribution('katayoon-rb', {
    githubToken: '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',
    year: 2024
})

const grid = []
for (let i = 0; i < 366; i += 7) {
    if (i === 364) {
        grid.push([ data[i], data[i + 1] ])
    }
    else {
       grid.push([
            data[i], data[i + 1], data[i + 2],
            data[i + 3], data[i + 4], data[i + 5], data[i + 6]
        ]) 
    }
    
}

function UserContributionToGrid() {
    return (
        <div className='flex flex-wrap gap-0.5 gap-y-2 md:gap-2'>
            {grid.map(week => (
                <div className='flex flex-col gap-0.5 md:gap-2' key={grid.indexOf(week)}>
                    {week.map(day => (
                        <div key={day.date}
                            className={'grid-sq bg-grid-' + day.level}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default UserContributionToGrid
