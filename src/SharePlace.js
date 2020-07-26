import { Modal } from './UI/Modal';
import { getCoordsFromAddress } from './Utility/Location'

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
      );
      return;
    }
    const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
    modal.show();
    navigator.geolocation.getCurrentPosition(
      successResult => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50,
        };
        console.log(coordinates);
      },
      error => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  }

  findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    } else {
      alert(`it a success but it won't work because it's a fake map and location, address demo project.`)
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
  }
}

const placeFinder = new PlaceFinder();