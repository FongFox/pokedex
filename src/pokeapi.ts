export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    // 1. Xác định URL cần gọi — nếu pageURL được truyền vào thì dùng nó, nếu không thì dùng URL mặc định của endpoint /location-area.
    const URLRequest = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`;

    // 2. Gọi API — dùng fetch(url) để thực hiện GET request, rồi await kết quả.
    const response = await fetch(URLRequest, {
      method: "GET",
      mode: "cors"
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    // 3. Parse và trả về JSON — dùng .json() trên response để lấy dữ liệu, ép kiểu về ShallowLocations.
    const responseData: ShallowLocations = await response.json();

    return responseData;
  }

  // Todo
  // async fetchLocation(locationName: string): Promise<Location> {
  //   // implement this
  // }
}

// Todo
export type ShallowLocations = {
  // add properties here
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

// Todo
export type Location = {
  // add properties here
};