/// <reference types="vite/client" />

import type { IArticleBlockDescriptionProps } from '@/components/ArticleBlockDescription/ArticleBlockDescription.type'

declare global {
  const __STATIC__MARKDOWN__DATA__: IArticleBlockDescriptionProps[]
}
