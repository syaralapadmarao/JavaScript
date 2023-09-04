import CurrentUser from "./CurrentUser";

const CurrentUserSingleton = (function () {
  let instance;

  function createInstance() {
    return new CurrentUser();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

export default CurrentUserSingleton;
