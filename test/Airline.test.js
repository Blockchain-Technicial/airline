/* eslint-disable no-undef */
const Airline = artifacts.require("Airline");

let instance;

beforeEach(async () => {
  instance = await Airline.new();
});

contract('Airline', (accounts) => {
  it('should have available flights', async () => {
    let total = await instance.totalFlights();
    assert(total > 0);
  });

    it('should allow costomers to buy a flight providing Its value', async () => {
        let flight = await instance.flights(0);
        let flightName = flight[0], price = flight[1];
        
        await instance.buyFlight(0, {from: accounts[0], value: price});
        let customerFlight = await instance.customerFlights(accounts[0], 0);
        let customerTotalFlights = await instance.customerTotalFlights(accounts[0]);
        
        assert(customerFlight[0], flightName);
        assert(customerFlight[1], price);
        assert(customerTotalFlights, 1);
    });

    it('should not allow customers to buy a flight if the value sent is not correct', async () => {
        let flight = await instance.flights(0);
        let price = flight[1] - 50000;
        
        try {
            await instance.buyFlight(0, {from: accounts[0], value: price});
        } catch (error) {
            assert(error);
            return;
        }
        assert(false);
    });

    it('should get real balance of the contract', async () => {
        let flight = await instance.flights(0);
        let price = flight[1];

        let flight2 = await instance.flights(1);
        let price2 = flight2[1];
        
        await instance.buyFlight(0, {from: accounts[0], value: price});
        await instance.buyFlight(1, {from: accounts[0], value: price2});
       
        let newAirlineBalance = await instance.getAirlineBalance();
        
        assert(newAirlineBalance, price + price2);
    });

    it('should allow customers to redeem loyalty points', async () => {
        let flight = await instance.flights(1);
        let price = flight[1];
        
        await instance.buyFlight(1, {from: accounts[0], value: price});

        let balance = await web3.eth.getBalance(accounts[0]);
        await instance.redeemLoyaltyPoints({from: accounts[0]});
        let finalBalance = await web3.eth.getBalance(accounts[0]);
        
        let customer = await instance.customers(accounts[0]);
        let loyaltyPoints = customer[0];

        assert(loyaltyPoints, 0);
        assert(finalBalance > balance);
    });
});