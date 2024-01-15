
export default function Page({ params }: { params: { slug: string } }) {
    return <div>A gente Tá aqui: {params.slug}</div>
  }