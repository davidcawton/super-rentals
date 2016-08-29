import Ember from 'ember';

let rentals= [{
  id: 1,
  title: 'Banner South',
  owner: 'Big Properties',
  city: 'Austin',
  type: 'Townhome',
  rooms: '3',
  image: "http://www.aptimg.com/review/ugc/images/jPvJzS-m-zg.jpg"
}, {
  id: 2,
  title: 'ATX Lofts',
  owner: 'DT Investments',
  city: 'Austin',
  type: 'Open Loft',
  rooms: '1',
  image: 'http://images1.aptcdn.com/attachments/get.ishx?x=5CFE9082AAA170003137796D760D88ED51773D3B1590ED4005B48F16122F277C405CFBA9F51884DF2EE1586E64BE4F6D10506C599FCEB7D23E28F16CCBB42777E0D53524C3319188A2A6EF5244AB3E89709CA355FE1730EF1CBB4933E64BA24BB55250031AD87D24351D6A10D873B73054D2A90AD68DC31CC4A5FF226DA411FDCA7B850E86C9E6454ED81F878BA7DA7E8D62205C29926CE5CD62877D1DC9BDB1C0564F0BB136C968953B85CA865E60FB'
}, {
  id: 3,
  title: 'The Open',
  owner: 'Solar, inc.',
  city: 'Austin',
  type: 'Apartment',
  rooms: '3',
  image:"http://toastdesign.com.au/wp-content/uploads/luxury_apartment_branding.jpg"
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
