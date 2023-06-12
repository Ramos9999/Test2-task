import { Response } from 'express';

import { Octokit } from 'octokit';

interface IQuery {
  repositories: string;
  pageNumber: string;
  perPage: string;
  slug?: string;
  users: string;
}

export interface UserRequest extends Request {
  query: IQuery;
}

const getUsers = async (req: UserRequest, res: Response) => {
  const octokit = new Octokit({
    auth: process.env.Token,
  });

  const { repositories, pageNumber, perPage, slug = '', users } = req.query;

  try {
    const result = await octokit.request(`GET /search/${slug}`, {
      q: users || repositories,
      per_page: perPage || 30,
      page: pageNumber || 1,
    });

    res.status(200).json(result.data.items);
  } catch (error) {
    res.status(300).json(error);
  }
};

export default getUsers;
