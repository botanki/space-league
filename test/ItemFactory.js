const ItemFactory = embark.require('Embark/contracts/ItemFactory');
const SpaceLeagueElement = embark.require('Embark/contracts/SpaceLeagueElement');
const SpaceLeagueCurrency = embark.require('Embark/contracts/SpaceLeagueCurrency');
const SpaceLeagueItem = embark.require('Embark/contracts/SpaceLeagueItem');

let accounts,
    owner,
    personOne;

config({
  contracts: {
    "SpaceLeagueElement": {},
    "SpaceLeagueCurrency": {},
    "SpaceLeagueItem": {},
    "ItemFactory": {
      args: [
        "$SpaceLeagueCurrency",
        "$SpaceLeagueItem"
      ]
    }
  }
}, async function (err, theAccounts) {
  accounts = theAccounts;
  owner = await ItemFactory.methods.owner().call();
  personOne = accounts[1];
});

contract("ItemFactory", function () {
  this.timeout(0);

  describe('On initialization...', function() {
    it('should set constructor value', async function () {
      let SPACE_LEAGUE_CURRENCY_ADDRESS = await ItemFactory.methods.SPACE_LEAGUE_CURRENCY_ADDRESS().call();
      let SPACE_LEAGUE_ITEM_ADDRESS = await ItemFactory.methods.SPACE_LEAGUE_ITEM_ADDRESS().call();
  
      assert.equal(SPACE_LEAGUE_CURRENCY_ADDRESS, SpaceLeagueCurrency.options.address);
      assert.equal(SPACE_LEAGUE_ITEM_ADDRESS, SpaceLeagueItem.options.address);
    });
  });

  describe('Function: SpaceLeagueElement.setGame(address _newGame)', function() {
    describe('When not called by the owner, it...', function() {
      it('Should revert', async () => {
        let revert;

        try {
          await SpaceLeagueElement.methods.setGame(owner).send({ from: personOne, gas: '100000' });
        } catch (e) {
          revert = e;
        }
        
        assert.ok(revert instanceof Error);
      });
    });

    describe('When called by the owner, it...', function() {
      it('Should update the game address', async () => {
        await SpaceLeagueElement.methods.setGame(owner).send({ from: owner, gas: '100000' });
        
        let gameAddress = await SpaceLeagueElement.methods.gameAddress().call();
        assert.equal(owner, gameAddress);
      });
    });
  });

  describe('Function: SpaceLeagueCurrency.mint(address _to, uint256 _amount)', function() {
    describe('When called, it...', function() {
      it('Should mint tokens', async () => {
        await SpaceLeagueCurrency.methods.mint(personOne, 1000).send({ from: owner, gas: '100000' });
        let balance = await SpaceLeagueCurrency.methods.balanceOf(personOne).call();
        assert.strictEqual(Number(balance), 1000);
      });
    });
  });


  describe('Function: SpaceLeagueItem.buyItem()', function() {
    it('should send', async () => {
      // call ERC20.approve so transferFrom works
      await SpaceLeagueCurrency.methods.approve(ItemFactory.address, 15).send({ from: personOne, gas: '1000000' });

      let personOneBalance = await SpaceLeagueCurrency.methods.balanceOf(personOne).call();
      console.log('personOneBalance 1: ', personOneBalance);

      let itemFactoryBalance = await SpaceLeagueCurrency.methods.balanceOf(ItemFactory.address).call();
      console.log('itemFactoryBalance 1: ', itemFactoryBalance);
      
      // get allowance
      let allowance = await SpaceLeagueCurrency.methods.allowance(personOne, ItemFactory.address).call();
      console.log('allowance1: ', allowance);

      // call buyItem
      let x = await ItemFactory.methods.buyItem().send({ from: personOne, gas: '1000000' });
      console.log(x.events);

      personOneBalance = await SpaceLeagueCurrency.methods.balanceOf(personOne).call();
      console.log('personOneBalance 2: ', personOneBalance);

      // check balance
      itemFactoryBalance = await SpaceLeagueCurrency.methods.balanceOf(ItemFactory.address).call();
      console.log('itemFactoryBalance 2: ', itemFactoryBalance);

      allowance = await SpaceLeagueCurrency.methods.allowance(personOne, ItemFactory.address).call();
      console.log('allowance2: ', allowance);
    });
  });



});