export const getGithubUserContribution = async (
  userName: string,
  o: { githubToken: string }
) => {
  const query = /* GraphQL */ `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                weekday
                date
              }
            }
          }
        }
      }
    }
  `;
  const variables = { login: userName };
console.log(process.env.GITHUB_TOKEN)
  const res = await fetch("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${o.githubToken}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ variables, query }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const { data, errors } = (await res.json()) as {
    data: GraphQLRes;
    errors?: { message: string }[];
  };

  if (errors?.[0]) throw errors[0];

  return data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    ({ contributionDays }, x) =>
      contributionDays.map((d) => ({
        x,
        y: d.weekday,
        date: d.date,
        count: d.contributionCount,
        level:
          (d.contributionLevel === "FOURTH_QUARTILE" && 4) ||
          (d.contributionLevel === "THIRD_QUARTILE" && 3) ||
          (d.contributionLevel === "SECOND_QUARTILE" && 2) ||
          (d.contributionLevel === "FIRST_QUARTILE" && 1) ||
          0,
      }))
  );
};

type GraphQLRes = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: {
          contributionDays: {
            contributionCount: number;
            contributionLevel:
              | "FOURTH_QUARTILE"
              | "THIRD_QUARTILE"
              | "SECOND_QUARTILE"
              | "FIRST_QUARTILE"
              | "NONE";
            date: string;
            weekday: number;
          }[];
        }[];
      };
    };
  };
};

export type Res = Awaited<ReturnType<typeof getGithubUserContribution>>;

export type Cell = Res[number];
