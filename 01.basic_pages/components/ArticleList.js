import aricleStyles from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'


const ArticleList = ({ articles }) => {
    return (
        <div className={aricleStyles.grid}>
            {articles.map((article) =>
                (
                    <ArticleItem article={article}/>
                )
            )}
        </div>
    )
}

export default ArticleList