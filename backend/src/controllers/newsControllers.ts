import type { Request, Response } from "express";
import type { HttpResponse, News } from "../../types.js";
import { NewsService } from "../services/newsService.js";
export class NewsController {
  static async GET_ALL_NEWS(
    _req: Request,
    res: Response<HttpResponse<News[]>>,
  ) {
    const news = await NewsService.getAllNews();

    res.status(200).json({
      success: true,
      data: news,
    });
  }

  static async GET_NEWS_BY_SLUG(
    req: Request<{ slug: string }>,
    res: Response<HttpResponse<News>>,
  ) {
    const { slug } = req.params;

    const news = await NewsService.getNewsBySlug(slug);

    res.status(200).json({
      success: true,
      data: news,
    });
  }
}
