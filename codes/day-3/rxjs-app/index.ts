import { Post } from "./post"
import { BehaviorSubject, Observable, of } from 'rxjs'
/*
function getData(): Observable<Post[]> | undefined {
    let obs: Observable<Post[]> | undefined;
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            const jsonResponse = request.responseText
            const posts = <Post[]>JSON.parse(jsonResponse)
            obs = of(posts)
        }
    }
    request.open(
        'GET',
        'https://jsonplaceholder.typicode.com/posts',
        true
    )
    request.send()
    return obs
}
*/

export function getArray(): Observable<Post[]> {
    const posts: Post[] = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }]
    return of(posts)
}

export class StorageService {
    private static _storageSvc: StorageService | null = null;
    private storage = new BehaviorSubject<string>('')
    repository = this.storage.asObservable()

    private constructor() {

    }
    static instantiate(): StorageService {
        if (this._storageSvc == null) {
            this._storageSvc = new StorageService()
        }
        return this._storageSvc
    }
    publishValue(data: string) {
        this.storage.next(data)
    }
}