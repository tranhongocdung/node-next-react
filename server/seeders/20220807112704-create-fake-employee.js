"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "employee",
      [
        {
          firstName: "Henri",
          lastName: "Rodriguez",
          email: "Darrin_Rippin@gmail.com",
          phone: "+94771277218",
          gender: "M",
          id: "1",
          avatar: "https://randomuser.me/api/portraits/men/92.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Lindsay",
          lastName: "Herman",
          email: "Ewald.Kunde@gmail.com",
          phone: "+94771274218",
          gender: "F",
          id: "2",
          avatar: "https://randomuser.me/api/portraits/men/30.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Gerda",
          lastName: "Trantow",
          email: "Mauricio.Stehr@yahoo.com",
          phone: "+94771277681",
          gender: "M",
          id: "3",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Skye",
          lastName: "Rolfson",
          email: "Angelita_Simonis@hotmail.com",
          phone: "+94771277689",
          gender: "F",
          id: "4",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Simeon",
          lastName: "Russel",
          email: "Fabiola_Heidenreich@yahoo.com",
          phone: "+94771277682",
          gender: "M",
          id: "5",
          avatar: "https://randomuser.me/api/portraits/men/81.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Kenyon",
          lastName: "Fahey",
          email: "Lia_Purdy@hotmail.com",
          phone: "+94771277683",
          gender: "F",
          id: "6",
          avatar: "https://randomuser.me/api/portraits/men/31.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Toni",
          lastName: "Boyle",
          email: "Vivien92@yahoo.com",
          phone: "+94771277684",
          gender: "M",
          id: "7",
          avatar: "https://randomuser.me/api/portraits/men/88.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Fredy",
          lastName: "Fritsch",
          email: "Christopher_Wisozk37@yahoo.com",
          phone: "+94771277685",
          gender: "M",
          id: "8",
          avatar: "https://randomuser.me/api/portraits/men/61.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Elvis",
          lastName: "Konopelski",
          email: "Mavis27@gmail.com",
          phone: "+94771277686",
          gender: "M",
          id: "9",
          avatar: "https://randomuser.me/api/portraits/men/66.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Lulu",
          lastName: "Reinger",
          email: "Melany_Rau70@gmail.com",
          phone: "+94771277687",
          gender: "F",
          id: "10",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Kelton",
          lastName: "Rau",
          email: "Patrick_Ratke@gmail.com",
          phone: "+94771277688",
          gender: "F",
          id: "11",
          avatar: "https://randomuser.me/api/portraits/men/71.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
        {
          firstName: "Adonis",
          lastName: "Schuppe",
          email: "Johann.Orn52@hotmail.com",
          phone: "+94771277618",
          gender: "M",
          id: "12",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
          createdAt: "2022-08-07T10:21:19.048Z",
          updatedAt: "2022-08-07T10:21:19.048Z",
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      "select setval('employee_id_seq', 12);"
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
