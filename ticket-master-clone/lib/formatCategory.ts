import { formattedCategoryType, genreCategoryItem } from "@/types"

export default function formatCategory(categoryData: { [key: string]: any }) {
  let formatCategoryData: formattedCategoryType = {
    segment: [],
    types: [],
  };

  if (Object.keys(categoryData).length > 0) {
    categoryData.data._embedded.classifications?.map(async (item: { [key: string]: any }) => {
      if (item.segment) {
        let data = { id: "", link: "", name: "", genres: [], image: "" };
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
          data.image = "https://source.unsplash.com/random?" + data.name;
          formatCategoryData.segment.push(data)
        }
      }


      if (item.type) {
        let data = { id: "", link: "", name: "", subtypes: [], image: "" };
        data.link = item._links.self.href
        data.id = item.type.id
        data.name = item.type.name
        data.subtypes = item.type._embedded.subtypes.map((subtype: { [key: string]: any }) => ({
          id: subtype.id,
          name: subtype.name,
          link: subtype._links.self.href,
        }))

        if (data.name !== "Undefined") {
          data.image = "https://source.unsplash.com/random?" + data.name;
          formatCategoryData.types.push(data)
        }
      }
    })
  }
  return formatCategoryData
}
