export default async function Page({ params }) {
    const { slug } = await params

    const arr = ['cloth', 'shoe', 'watch']
    if (arr.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    return (
        <div>
            not found
        </div>
    )
}