import Link from "next/link";
import api from "@/api";

export default async function ItemsPage({searchParams}: {searchParams: {search: string }}) {

  
  const { results } = await api.item.search(searchParams.search);

  return (
    <section>
      <article>
        {results.map((item) => (
          <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p className="font-fold text-xl">{Number(item.price).toLocaleString('es-AR', 
              {style:'currency',
              currency: item.currency_id})} </p>
              <p>{item.title}</p>
            </div>
          <span className="ml-auto text-sm capitalize opacity-50">{item.seller_address.city.name.toLowerCase()}</span>
          </Link>
           
        ))}
      </article>
    </section>
  );
}  
