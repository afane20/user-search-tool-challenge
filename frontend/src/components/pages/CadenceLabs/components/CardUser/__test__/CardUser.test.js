import { render, screen, fireEvent } from '@testing-library/react';
import CardUser from "../CardUser";
import '@testing-library/jest-dom';

const user = {
    email: "Sincere@april.biz",
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    username: "Bret",
    website: "hildegard.org",
    address: {
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        },
        "city": "Gwenborough",
        "suite": "Apt. 556",
        "street": "Kulas Light",
        "zipcode": "92998-3874"
    },
    company: {
        "bs": "harness real-time e-markets",
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net"
    },
    albums: [
        {
            "id": 1,
            "userId": 1,
            "title": "quidem molestiae enim",
            "photos": [
              {
                "id": 1,
                "albumId": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
              },
            ]
        }
    ]
}

it('should be able to show the name', async () => {

    render(
        <CardUser user={user} />
    );

    const element1 = await screen.getByText(/Leanne Graham/i);
    expect(element1).toBeInTheDocument();

});

it('should be able to show the classname', async () => {
    render(<CardUser user={user} />);
    const element1 = await screen.getByText(/Leanne Graham/i);
    expect(element1).toHaveClass("card_title")

});

test("it should to show the company", async () => {
    render(<CardUser user={user} />);
    const element1 = await screen.getByText("Romaguera-Crona");
    expect(element1).toBeVisible();
  });
  