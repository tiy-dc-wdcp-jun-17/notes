const db = require("../../models");
const Item = db.item;
describe('Item', () => {

  afterEach(() => {
    return Item.destroy({ where: {} })  
  });

  it('can be persisted', () => {
    return Item.create({ description: "Skittles", costInCents: 75, quantity: 20}).then((item) => {
      expect(item.id).toBeTruthy();
    })
  });
});
