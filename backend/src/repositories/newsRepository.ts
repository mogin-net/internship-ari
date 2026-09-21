import type { News, NewsBlock } from "../../types.js";
import { DatabaseError, NotFoundError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export class NewsRepository {
  static async getAllNews(): Promise<News[]> {
    try {
      const data = await query<News>(
        `
        SELECT
          id,
          title,
          category,
          slug,
          thumbnail,
          published_at AS "publishedAt",
          created_at AS "createdAt"
        FROM public.news
        ORDER BY published_at DESC
        `,
      );

      return data.rows;
    } catch (error) {
      console.error(error);

      throw new DatabaseError("Failed to get news from database");
    }
  }

  static async getNewsBySlug(slug: string): Promise<News> {
    try {
      const newsData = await query<News>(
        `
      SELECT
        id,
        title,
        category,
        slug,
        thumbnail,
        published_at AS "publishedAt",
        created_at AS "createdAt"
      FROM public.news
      WHERE slug = $1
      `,
        [slug],
      );

      const news = newsData.rows[0];

      if (!news) {
        throw new NotFoundError("News not found");
      }

      const blocksData = await query<NewsBlock>(
        `
      SELECT
        id,
        type,
        content,
        sort_order AS "sortOrder"
      FROM public.news_blocks
      WHERE news_id = $1
      ORDER BY sort_order ASC
      `,
        [news.id],
      );

      return {
        ...news,
        blocks: blocksData.rows,
      };
    } catch (error) {
      console.error(error);

      throw new DatabaseError("Failed to get news from database");
    }
  }
}
