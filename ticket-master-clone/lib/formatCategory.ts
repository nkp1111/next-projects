import { formattedCategoryType, genreCategoryItem } from "@/types"

export default async function formatCategory(categoryData: { [key: string]: any }) {
  let formatCategoryData: formattedCategoryType = {
    segment: [],
    types: [],
  };

  if (Object.keys(categoryData).length > 0) {

    for (let item of categoryData?.data?._embedded?.classifications) {
      if (item.segment) {
        let data = { id: "", link: "", name: "", genres: [], image: "", events: [] };
        data.link = item._links.self.href
        data.id = item.segment.id
        data.name = item.segment.name
        data.genres = item.segment._embedded.genres.map((genre: { [key: string]: any }): genreCategoryItem => ({
          id: genre.id,
          name: genre.name,
          link: genre._links.self.href,
          subgenre: genre._embedded.subgenres.map((subg: { [key: string]: any }) => ({
            id: subg.id,
            name: subg.name,
            link: subg._links.self.href
          }))
        }))

        if (data.name !== "Undefined") {
          const res = await fetch(`/api/categoryEvents?location=US&eventName=${data.name}`, {
            method: "POST",
            cache: "no-store",
            next: { revalidate: 0 },
          });
          const categoryEvents = await res.json();
          data.image = "https://source.unsplash.com/random?" + data.name;
          data.events = categoryEvents?.data?._embedded?.events || [];
          formatCategoryData.segment.push(data)
        }
      }


      if (item.type) {
        let data = { id: "", link: "", name: "", subtypes: [], image: "", events: [] };
        data.link = item._links.self.href
        data.id = item.type.id
        data.name = item.type.name
        data.subtypes = item.type._embedded.subtypes.map((subtype: { [key: string]: any }) => ({
          id: subtype.id,
          name: subtype.name,
          link: subtype._links.self.href,
        }))

        if (data.name !== "Undefined") {
          const res = await fetch(`/api/categoryEvents?location=US&eventName=${data.name}`, {
            method: "POST",
            cache: "no-store",
            next: { revalidate: 0 },
          });
          const categoryEvents = await res.json();
          data.image = "https://source.unsplash.com/random?" + data.name;
          data.events = categoryEvents?.data?._embedded?.events || [];
          formatCategoryData.types.push(data)
        }
      }
    }
  }
  return formatCategoryData
}
