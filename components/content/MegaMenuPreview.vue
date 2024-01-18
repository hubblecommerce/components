<template>
    <div class="w-full min-h-[500px]">
        <MegaMenu :navigation="navigation" />
    </div>
</template>

<script setup lang="ts">
const navigation = ref(
    [
        {
            "id": "06f68e7f-f2b6-4a11-ab5e-e7858353a845",
            "name": "Hills and Conn",
            "url": "https://hhac.name",
            "children": [
                {
                    "id": "b74e1093-0b3f-4696-9163-6243d8d940ed",
                    "name": "Tasty Granite Pants",
                    "url": "https://hhac.com",
                    "children": [
                        {
                            "id": "46fb0429-4d86-4d8b-923c-29b565c2c458",
                            "name": "Ferrari A4",
                            "url": "https://hhac.net"
                        },
                        {
                            "id": "1103019c-3195-42e6-ba60-7d83e29dd0c9",
                            "name": "Nissan Alpine",
                            "url": "https://hhac.net"
                        },
                        {
                            "id": "58d99edb-74bd-47d8-9e6d-8c17c1f2df97",
                            "name": "Ford 911",
                            "url": "https://hhac.biz"
                        },
                        {
                            "id": "17062fc5-945c-4e3f-aa03-f2045f6392fe",
                            "name": "Volvo Beetle",
                            "url": "https://hhac.biz"
                        },
                        {
                            "id": "d24d27d6-a537-4b9e-91eb-321df23d0561",
                            "name": "Polestar Civic",
                            "url": "http://hhac.com"
                        },
                        {
                            "id": "ec052d6b-3716-4465-8ff0-6fb840532cae",
                            "name": "Mini Camry",
                            "url": "https://hhac.com"
                        }
                    ]
                },
                {
                    "id": "96508e8d-ed5c-4635-8365-d1ece424d865",
                    "name": "Handmade Steel Gloves",
                    "url": "http://hhac.name",
                    "children": [
                        {
                            "id": "d4b4aaa2-c73d-4a28-bf97-f4b7581c310b",
                            "name": "Honda Sentra",
                            "url": "https://hhac.net"
                        },
                        {
                            "id": "f2042ef6-2514-44d4-bbf6-6dea1ee35413",
                            "name": "Lamborghini CTS",
                            "url": "http://hhac.com"
                        },
                        {
                            "id": "63224895-4503-4355-8abc-311a80f565d0",
                            "name": "Ford Escalade",
                            "url": "https://hhac.name"
                        },
                        {
                            "id": "1f16cb19-2dac-4aee-9741-498531dab1b8",
                            "name": "Land Rover V90",
                            "url": "http://hhac.net"
                        },
                        {
                            "id": "b8c55e48-de8d-4064-a397-796ee1310ed7",
                            "name": "BMW Camry",
                            "url": "http://hhac.com"
                        },
                        {
                            "id": "fa216e60-c776-43d1-b491-0c85de81990a",
                            "name": "Chevrolet Mustang",
                            "url": "http://hhac.biz"
                        },
                        {
                            "id": "8aed4b82-8fe2-4ed5-944f-ec96a3a2c62c",
                            "name": "Bugatti Cruze",
                            "url": "http://hhac.org"
                        },
                        {
                            "id": "91895745-6a09-438f-9c2d-b099d810b2b6",
                            "name": "Nissan Mercielago",
                            "url": "https://hhac.net"
                        },
                        {
                            "id": "e15aa708-e003-41a3-8e4f-34d3a3f31463",
                            "name": "Jaguar Model 3",
                            "url": "http://hhac.name"
                        },
                        {
                            "id": "a5880a3e-8ade-45b4-a012-ab1c597ef2b9",
                            "name": "Cadillac Land Cruiser",
                            "url": "http://hhac.net"
                        },
                        {
                            "id": "791238a6-e6dc-486e-8e04-3d0cb049dbdf",
                            "name": "Kia Grand Caravan",
                            "url": "http://hhac.biz"
                        },
                        {
                            "id": "8e645507-6983-4b28-826a-ca3a63843fcb",
                            "name": "Jeep Model 3",
                            "url": "https://hhac.name"
                        }
                    ]
                }
            ]
        },
        {
            "id": "72f779c3-0c85-4673-98af-17ce83ca98c8",
            "name": "Weimann",
            "url": "https://wcac.net",
            "children": [
                {
                    "id": "c1db0670-3b02-450b-8286-ff44f61c19fb",
                    "name": "Intelligent Metal Computer",
                    "url": "http://wcac.biz",
                    "children": [
                        {
                            "id": "080bfc45-204d-43c0-a0cb-bb7da387c39a",
                            "name": "Tesla Wrangler",
                            "url": "http://wcac.com"
                        },
                        {
                            "id": "5de10273-8160-43d1-9e8d-c16f473bed97",
                            "name": "Rolls Royce Land Cruiser",
                            "url": "http://wcac.name"
                        },
                        {
                            "id": "4990d61b-c0b4-4221-9ecd-84acb96beb3e",
                            "name": "Rolls Royce 911",
                            "url": "https://wcac.com"
                        },
                        {
                            "id": "6bfd7888-8c23-4391-9bdf-3ee5fed93c87",
                            "name": "Cadillac XC90",
                            "url": "http://wcac.org"
                        },
                        {
                            "id": "e4f4b276-df9e-4a00-a6a0-12aa020027e2",
                            "name": "Mini Spyder",
                            "url": "http://wcac.org"
                        },
                        {
                            "id": "f1b705ae-0342-45fb-996c-375fea62f356",
                            "name": "Jaguar Colorado",
                            "url": "https://wcac.net"
                        }
                    ]
                },
                {
                    "id": "58861116-2b4a-469d-9386-738456be4dc4",
                    "name": "Small Granite Shirt",
                    "url": "https://wcac.org",
                    "children": [
                        {
                            "id": "864fcddb-3366-4507-ba67-c90c19a58540",
                            "name": "Jeep El Camino",
                            "url": "http://wcac.com"
                        },
                        {
                            "id": "002b4849-e61f-45a3-8435-2b05fc68ad45",
                            "name": "Mazda Roadster",
                            "url": "http://wcac.info"
                        },
                        {
                            "id": "1aa8e631-52b5-48cb-94a2-66eac7447d4e",
                            "name": "Aston Martin Alpine",
                            "url": "https://wcac.name"
                        },
                        {
                            "id": "5cf0e36b-0fc3-4651-909a-990ddac61a9e",
                            "name": "Toyota Corvette",
                            "url": "http://wcac.biz"
                        },
                        {
                            "id": "c34bbf9a-7a8c-4556-88e5-53d171709ea9",
                            "name": "Aston Martin Altima",
                            "url": "http://wcac.name"
                        },
                        {
                            "id": "dfd2c692-5aa4-4cf5-9983-e23be9da7ddb",
                            "name": "Lamborghini Accord",
                            "url": "http://wcac.net"
                        },
                        {
                            "id": "226992e9-6b59-43a7-b741-5c285dd6b962",
                            "name": "Honda Expedition",
                            "url": "https://wcac.com"
                        },
                        {
                            "id": "d1fc4e4a-22b3-47d5-a73e-18920d9cd647",
                            "name": "Land Rover Civic",
                            "url": "http://wcac.com"
                        },
                        {
                            "id": "0e193a8f-9b89-4198-971d-269945601487",
                            "name": "Ford CTS",
                            "url": "http://wcac.biz"
                        }
                    ]
                },
                {
                    "id": "6c527f44-557d-400f-98f4-3b99debd3136",
                    "name": "Licensed Rubber Table",
                    "url": "http://wcac.net",
                    "children": [
                        {
                            "id": "7c472bcc-909b-4859-bbba-3d83847fca41",
                            "name": "Mercedes Benz Colorado",
                            "url": "http://wcac.info"
                        },
                        {
                            "id": "9fa7e08b-8439-4072-aba0-fd9e9b139e5f",
                            "name": "Toyota ATS",
                            "url": "https://wcac.com"
                        },
                        {
                            "id": "6d448a7b-f2d7-4eff-ac7f-714cd25d241b",
                            "name": "Cadillac Roadster",
                            "url": "http://wcac.info"
                        },
                        {
                            "id": "b4aa4e6e-799d-45a7-9747-de9bdc623978",
                            "name": "Maserati Jetta",
                            "url": "http://wcac.com"
                        },
                        {
                            "id": "9ab4bd37-33af-4e60-9964-bc3556045425",
                            "name": "Jaguar Fortwo",
                            "url": "https://wcac.com"
                        },
                        {
                            "id": "9f6a4e40-744e-4d3c-928d-14ced39d95c6",
                            "name": "Aston Martin Colorado",
                            "url": "https://wcac.net"
                        },
                        {
                            "id": "6b03f72a-760d-464b-8e03-ad6f58c1d404",
                            "name": "Audi CTS",
                            "url": "https://wcac.info"
                        },
                        {
                            "id": "21bfa572-f0ef-43a8-ad95-07c314dd06d7",
                            "name": "Hyundai Countach",
                            "url": "http://wcac.biz"
                        },
                        {
                            "id": "705d10ec-2cd6-4c21-a276-5d332ffbe75d",
                            "name": "Ferrari Jetta",
                            "url": "http://wcac.com"
                        },
                        {
                            "id": "e1288bd7-40cd-4e46-88b5-a10777e5dc89",
                            "name": "Porsche Aventador",
                            "url": "https://wcac.org"
                        },
                        {
                            "id": "2ca8bfb3-0933-4c32-b8c5-785b8bee4680",
                            "name": "Chevrolet Colorado",
                            "url": "http://wcac.net"
                        }
                    ]
                }
            ]
        },
        {
            "id": "d658c2c4-4497-4cb5-9b3f-e8363631b66a",
            "name": "Jacobi",
            "url": "http://jacobi_batz.biz",
            "children": [
                {
                    "id": "9efa5d45-a58a-4b03-a1f8-5d6694c4b380",
                    "name": "Handmade Soft Shirt",
                    "url": "https://jacobi-batz.biz",
                    "children": [
                        {
                            "id": "db0cfde5-4226-421c-9ed6-0ae2618aadd2",
                            "name": "Mercedes Benz Civic",
                            "url": "https://jacobi-batz.org"
                        },
                        {
                            "id": "a9c0981f-57e1-4c19-9d72-597b949eff24",
                            "name": "Cadillac Roadster",
                            "url": "http://jacobibatz.com"
                        },
                        {
                            "id": "54bdd74b-710e-4d4a-96e4-d78d5e57df7a",
                            "name": "Mini A8",
                            "url": "http://jacobibatz.name"
                        },
                        {
                            "id": "76ab7ce2-b91a-412c-9639-b3035237f71e",
                            "name": "Mazda V90",
                            "url": "https://jacobi-batz.org"
                        },
                        {
                            "id": "69d782ed-168e-4c8b-891c-5c8b36f0abf3",
                            "name": "Audi Fiesta",
                            "url": "http://jacobibatz.org"
                        },
                        {
                            "id": "901192d0-1733-4242-94fc-2ff10b8e642f",
                            "name": "Volkswagen Explorer",
                            "url": "http://jacobi-batz.net"
                        }
                    ]
                },
                {
                    "id": "1007b14f-f8f2-4638-8204-6bdbf4cf1e4c",
                    "name": "Incredible Plastic Ball",
                    "url": "https://jacobi_batz.info",
                    "children": [
                        {
                            "id": "69878cd6-8db7-4a9d-ba51-2074fa2b7a02",
                            "name": "Bentley Camry",
                            "url": "http://jacobi_batz.com"
                        },
                        {
                            "id": "981669c1-9d5e-48b5-9427-5c180338bad7",
                            "name": "Jeep Camry",
                            "url": "https://jacobi-batz.com"
                        },
                        {
                            "id": "1418fe09-158c-42f5-804f-6d705947133b",
                            "name": "Aston Martin Jetta",
                            "url": "https://jacobibatz.biz"
                        },
                        {
                            "id": "b96e5d28-190f-4df5-a7a8-5eb4ddb702bc",
                            "name": "Honda Altima",
                            "url": "https://jacobibatz.net"
                        },
                        {
                            "id": "1825e12d-5192-410e-9826-9477d39f456d",
                            "name": "Aston Martin Element",
                            "url": "http://jacobi-batz.name"
                        },
                        {
                            "id": "0a0836ac-7283-498e-9b9a-39c679cd5515",
                            "name": "Porsche Prius",
                            "url": "http://jacobibatz.com"
                        },
                        {
                            "id": "a7285cc8-c944-40d0-afc1-c3bf6617cb69",
                            "name": "Hyundai ATS",
                            "url": "http://jacobibatz.com"
                        },
                        {
                            "id": "29972604-7dd8-4cf5-932c-a63864c088e9",
                            "name": "Volkswagen LeBaron",
                            "url": "http://jacobibatz.com"
                        },
                        {
                            "id": "ef58597c-c196-4299-a9ab-61d24711a860",
                            "name": "Tesla Sentra",
                            "url": "https://jacobi-batz.org"
                        },
                        {
                            "id": "17b66727-aa16-430b-b778-3f23c02371b5",
                            "name": "Nissan Altima",
                            "url": "http://jacobi-batz.org"
                        }
                    ]
                },
                {
                    "id": "8c48101e-493b-43d6-a865-ffda05b460c8",
                    "name": "Handcrafted Wooden Computer",
                    "url": "http://jacobi_batz.info",
                    "children": [
                        {
                            "id": "51d265b9-c92f-4ae4-a569-c1695bf81255",
                            "name": "Smart Camaro",
                            "url": "https://jacobibatz.biz"
                        },
                        {
                            "id": "14a470ca-d9c1-49ac-b563-7e47b2dae43c",
                            "name": "Tesla Escalade",
                            "url": "https://jacobibatz.name"
                        },
                        {
                            "id": "43c6d0b3-638b-41b4-901d-6a6116240e45",
                            "name": "Hyundai Civic",
                            "url": "https://jacobibatz.net"
                        },
                        {
                            "id": "d5570f75-d63b-40bd-93b7-d9a8ff71b004",
                            "name": "Smart Impala",
                            "url": "https://jacobibatz.info"
                        },
                        {
                            "id": "4b076b64-b072-438f-99ef-b31a44f8c4cd",
                            "name": "Volkswagen Element",
                            "url": "https://jacobi-batz.biz"
                        },
                        {
                            "id": "47102aa5-4c28-4dc2-bed0-2218b25aacda",
                            "name": "Lamborghini Malibu",
                            "url": "https://jacobi-batz.org"
                        }
                    ]
                }
            ]
        },
        {
            "id": "d9756d53-d119-4f5c-8e70-2d11828e3f61",
            "name": "Klein and Sons",
            "url": "https://kleinandsons.net",
            "children": [
                {
                    "id": "b243bfde-8ea2-4536-a76a-a93c186366b2",
                    "name": "Refined Steel Chair",
                    "url": "https://klein-and-sons.net",
                    "children": [
                        {
                            "id": "bad15f7c-9ef0-40b9-ac4f-88fbc9226080",
                            "name": "Toyota 2",
                            "url": "http://kleinandsons.name"
                        },
                        {
                            "id": "5aad5bc2-a573-4a91-8134-fd32928a9065",
                            "name": "Maserati Model T",
                            "url": "http://kleinandsons.com"
                        },
                        {
                            "id": "329d7e5d-926b-4d43-8024-10a8a00d3608",
                            "name": "Ferrari Charger",
                            "url": "https://klein-and-sons.name"
                        },
                        {
                            "id": "2792d1fc-1e17-4abd-bf58-eb0d096554b3",
                            "name": "Chrysler LeBaron",
                            "url": "https://klein-and-sons.info"
                        },
                        {
                            "id": "50acf046-d6fd-47c6-8f7b-7fd0d6039e2c",
                            "name": "Ford XTS",
                            "url": "https://kleinandsons.org"
                        },
                        {
                            "id": "a01ec3d8-108c-44ea-9e3b-b3c85c30c86d",
                            "name": "Fiat Land Cruiser",
                            "url": "https://klein-and-sons.info"
                        },
                        {
                            "id": "c5f3592f-543b-4b11-91f0-581098057ed1",
                            "name": "Toyota Grand Caravan",
                            "url": "https://kleinandsons.org"
                        },
                        {
                            "id": "4bdefd07-2301-4d7a-a96f-f21d31380c0c",
                            "name": "Jaguar XC90",
                            "url": "http://kleinandsons.info"
                        },
                        {
                            "id": "c0eed20d-6e89-43a0-8a12-4cea698a3767",
                            "name": "Maserati Silverado",
                            "url": "https://kleinandsons.info"
                        },
                        {
                            "id": "c7a74649-ec33-493a-8049-e3f44781de16",
                            "name": "Mazda Civic",
                            "url": "https://klein_and_sons.biz"
                        },
                        {
                            "id": "ddb79e9f-1bda-4f69-898f-7f2ac2b3a7bd",
                            "name": "Dodge Accord",
                            "url": "https://kleinandsons.name"
                        }
                    ]
                },
                {
                    "id": "1336983d-df72-4fc1-905f-2d62c947a4b3",
                    "name": "Refined Steel Table",
                    "url": "https://kleinandsons.net",
                    "children": [
                        {
                            "id": "0bd3edfa-d176-43b0-b569-7dee3fbb5827",
                            "name": "Mazda Model S",
                            "url": "https://kleinandsons.biz"
                        },
                        {
                            "id": "04a89d46-5e01-4509-9d3f-200480a1c8d3",
                            "name": "Bugatti Camaro",
                            "url": "http://kleinandsons.name"
                        },
                        {
                            "id": "2bf90f74-56aa-4b0c-8448-de9bb841d5e8",
                            "name": "Hyundai Beetle",
                            "url": "https://kleinandsons.name"
                        },
                        {
                            "id": "c66ec99b-9f3e-46c2-8c01-b720261b1f43",
                            "name": "Kia El Camino",
                            "url": "https://kleinandsons.name"
                        },
                        {
                            "id": "00b4d87b-c135-4ba0-ad9d-9c125ccafdb3",
                            "name": "Ferrari Roadster",
                            "url": "http://klein-and-sons.info"
                        },
                        {
                            "id": "eaab96cf-1f95-4416-9ffe-acf5a3e59306",
                            "name": "Jaguar 2",
                            "url": "https://kleinandsons.net"
                        }
                    ]
                },
                {
                    "id": "55cb11c9-d85e-4b8d-a7bb-3e8e5443e7b4",
                    "name": "Sleek Steel Shirt",
                    "url": "http://kleinandsons.biz",
                    "children": [
                        {
                            "id": "004b5bcd-e191-411e-b228-004404790f4d",
                            "name": "Fiat Taurus",
                            "url": "https://kleinandsons.name"
                        },
                        {
                            "id": "8b6ea009-d8a8-4af4-ae1c-6322c111e735",
                            "name": "Smart Model S",
                            "url": "http://klein_and_sons.org"
                        },
                        {
                            "id": "a3e8ac77-8887-4cab-867f-b84befd0333a",
                            "name": "Jaguar Grand Cherokee",
                            "url": "https://kleinandsons.net"
                        },
                        {
                            "id": "6211766a-ad02-4e46-8b0e-c2c0048ffb10",
                            "name": "Aston Martin CTS",
                            "url": "http://klein-and-sons.name"
                        },
                        {
                            "id": "926dbe4d-9060-4421-87d5-8275fcf621db",
                            "name": "Chevrolet Altima",
                            "url": "https://kleinandsons.org"
                        },
                        {
                            "id": "92a80b41-0a1a-4d0d-9379-fd698c2a1c82",
                            "name": "Cadillac 1",
                            "url": "http://klein-and-sons.name"
                        },
                        {
                            "id": "08b9077a-9c60-4999-b7f5-1bd1dbb512f6",
                            "name": "Dodge Fortwo",
                            "url": "http://kleinandsons.biz"
                        },
                        {
                            "id": "880eb8ef-7273-4678-8794-4817cccfc450",
                            "name": "Cadillac Accord",
                            "url": "https://klein-and-sons.net"
                        },
                        {
                            "id": "00c59df5-46e1-4948-9df0-b419571622e5",
                            "name": "Fiat 2",
                            "url": "https://klein_and_sons.com"
                        },
                        {
                            "id": "de3b87b3-3b75-4a0f-a35f-f29cc88d97e1",
                            "name": "Hyundai Model 3",
                            "url": "https://klein-and-sons.org"
                        },
                        {
                            "id": "042c793a-eea9-463c-9d01-9a1ae928ac27",
                            "name": "Ford Camry",
                            "url": "http://klein-and-sons.org"
                        },
                        {
                            "id": "5cde9d15-e948-4776-a3c9-d7b17d11bb75",
                            "name": "Volkswagen Fiesta",
                            "url": "https://klein_and_sons.net"
                        },
                        {
                            "id": "d5754b98-ee86-4c69-b8a4-6d80fc2f3d62",
                            "name": "Tesla PT Cruiser",
                            "url": "http://kleinandsons.net"
                        }
                    ]
                }
            ]
        },
        {
            "id": "a23907ea-a87a-454d-b65c-f96b9afc3a60",
            "name": "Stroman",
            "url": "http://sr.name",
            "children": [
                {
                    "id": "bbe2690e-e5ff-47d2-91f2-ca0b4b25fa36",
                    "name": "Intelligent Granite Chicken",
                    "url": "http://sr.org",
                    "children": [
                        {
                            "id": "6e6f5505-813a-4c7a-b289-0e1725b34e2e",
                            "name": "Hyundai CTS",
                            "url": "https://sr.net"
                        },
                        {
                            "id": "1b74febf-cc8a-4c2c-9e03-8bb93acd7b8c",
                            "name": "Volkswagen Alpine",
                            "url": "https://sr.com"
                        },
                        {
                            "id": "fa65af3d-3506-4668-a8b5-444eeb747c00",
                            "name": "Fiat Wrangler",
                            "url": "https://sr.info"
                        },
                        {
                            "id": "1fdd89f9-729f-45d9-ad21-2808063fb7fc",
                            "name": "Land Rover Beetle",
                            "url": "http://sr.info"
                        },
                        {
                            "id": "a566602e-2935-4679-8515-d2fdaf1087fd",
                            "name": "Bugatti Silverado",
                            "url": "http://sr.org"
                        },
                        {
                            "id": "ff38f54e-2dea-425a-a48d-f05b24be1a48",
                            "name": "Smart Ranchero",
                            "url": "http://sr.com"
                        },
                        {
                            "id": "3d2818d6-9cb7-4985-937b-05e456635f2b",
                            "name": "Jaguar El Camino",
                            "url": "http://sr.net"
                        },
                        {
                            "id": "fac3272d-08f0-4629-8086-0f7731c888c0",
                            "name": "Cadillac Cruze",
                            "url": "http://sr.net"
                        },
                        {
                            "id": "47e35242-37ec-4668-b9a9-6b7cdf1d1bfc",
                            "name": "Jaguar Model 3",
                            "url": "http://sr.org"
                        },
                        {
                            "id": "5c7d3b3d-ac12-492f-821a-6e48b8139fff",
                            "name": "Audi A8",
                            "url": "http://sr.net"
                        },
                        {
                            "id": "d93cbe5f-ef3f-4a9a-b737-dc6c52b4ce67",
                            "name": "Ford Model T",
                            "url": "https://sr.org"
                        }
                    ]
                },
                {
                    "id": "5a62b987-7b35-4e51-b3b7-03ad086eb5f0",
                    "name": "Rustic Frozen Pants",
                    "url": "https://sr.com",
                    "children": [
                        {
                            "id": "b69419ab-6013-48a7-8712-b4e4a8b38455",
                            "name": "Toyota Beetle",
                            "url": "https://sr.net"
                        },
                        {
                            "id": "d87439b4-ae6e-44ec-abef-93814d3f8874",
                            "name": "Chevrolet Colorado",
                            "url": "http://sr.com"
                        },
                        {
                            "id": "08a3ef04-c5a0-41e0-ae3a-981b6718c85b",
                            "name": "Chevrolet ATS",
                            "url": "http://sr.name"
                        },
                        {
                            "id": "3e82fb86-dbbc-4cb6-9f2c-639ee74dbcb8",
                            "name": "Dodge Camry",
                            "url": "http://sr.info"
                        },
                        {
                            "id": "56da7852-76e8-4c21-9d67-3adeecd5f316",
                            "name": "Mercedes Benz Escalade",
                            "url": "https://sr.name"
                        },
                        {
                            "id": "a89c585d-36d4-442f-9cc2-6741449c20b7",
                            "name": "Hyundai Altima",
                            "url": "https://sr.org"
                        },
                        {
                            "id": "ee020dd4-96f9-4046-847d-c139e8a2b145",
                            "name": "Maserati Malibu",
                            "url": "https://sr.name"
                        },
                        {
                            "id": "4ad3c503-70ae-4428-9d9a-a5853dfaa632",
                            "name": "Nissan Ranchero",
                            "url": "http://sr.net"
                        }
                    ]
                },
                {
                    "id": "f2532df9-2bd7-42e7-8cd4-deeb1d735183",
                    "name": "Small Concrete Tuna",
                    "url": "https://sr.info",
                    "children": [
                        {
                            "id": "92fcf663-f967-4c01-868d-1fdb8e429e71",
                            "name": "BMW Taurus",
                            "url": "https://sr.info"
                        },
                        {
                            "id": "bc39e781-c89f-4c89-91f6-e06b18232fa5",
                            "name": "Fiat Durango",
                            "url": "http://sr.info"
                        },
                        {
                            "id": "9846132f-6331-4954-8ccf-d29388513851",
                            "name": "Audi Model 3",
                            "url": "https://sr.org"
                        },
                        {
                            "id": "8e405ab8-0027-401a-8efd-1bc67cde4f2c",
                            "name": "Kia Escalade",
                            "url": "https://sr.info"
                        },
                        {
                            "id": "88484b98-7e47-4faf-943f-c63bf5dff40f",
                            "name": "Polestar Jetta",
                            "url": "http://sr.org"
                        },
                        {
                            "id": "2dd223be-942a-4c69-a70b-669b1e89dc0c",
                            "name": "Ford F-150",
                            "url": "https://sr.biz"
                        },
                        {
                            "id": "dc95d429-62ad-456c-b2e2-137d43761139",
                            "name": "Mazda Beetle",
                            "url": "https://sr.name"
                        },
                        {
                            "id": "97d8d54e-8134-4f2e-b5a3-654e78287116",
                            "name": "Bugatti V90",
                            "url": "http://sr.info"
                        },
                        {
                            "id": "bfdd445d-ed3e-4136-bc7d-fd0e4913999f",
                            "name": "Honda Challenger",
                            "url": "https://sr.name"
                        },
                        {
                            "id": "7c579535-7bb7-48e1-a914-7ee1219c55ce",
                            "name": "Ferrari Altima",
                            "url": "http://sr.biz"
                        }
                    ]
                },
                {
                    "id": "4f6f3e9b-7b1a-4f98-bdb8-d4d8b6ae0220",
                    "name": "Rustic Wooden Hat",
                    "url": "http://sr.net",
                    "children": [
                        {
                            "id": "8fc414c9-b3bd-49c8-b212-008ee88d389b",
                            "name": "Mini ATS",
                            "url": "http://sr.com"
                        },
                        {
                            "id": "54029af0-35c8-4baf-a40b-1cc8d91c1e11",
                            "name": "Rolls Royce Prius",
                            "url": "http://sr.info"
                        },
                        {
                            "id": "6528562a-2950-406d-a5e1-4714e148d1f7",
                            "name": "Smart Countach",
                            "url": "http://sr.name"
                        },
                        {
                            "id": "94973048-c76a-473e-baa7-0f3913de08f6",
                            "name": "Aston Martin Fortwo",
                            "url": "https://sr.net"
                        },
                        {
                            "id": "6193e959-462c-4081-b5ea-d111f5bef713",
                            "name": "Nissan Beetle",
                            "url": "https://sr.org"
                        },
                        {
                            "id": "f3d3a9b2-4ea1-458e-8030-0f9c73f2f139",
                            "name": "Tesla Mustang",
                            "url": "http://sr.org"
                        },
                        {
                            "id": "d98643b9-4ffb-47cc-92b3-9ba0ccf418e7",
                            "name": "Tesla Sentra",
                            "url": "https://sr.com"
                        },
                        {
                            "id": "bf281cb5-b3de-4f75-9889-1cba7195e458",
                            "name": "Mercedes Benz Expedition",
                            "url": "https://sr.biz"
                        },
                        {
                            "id": "1e208e29-32fb-440b-a714-6528e9864485",
                            "name": "Lamborghini Focus",
                            "url": "http://sr.com"
                        },
                        {
                            "id": "d076b7b8-1df8-436c-b0c2-bd2ebd096ada",
                            "name": "Volkswagen A8",
                            "url": "https://sr.net"
                        },
                        {
                            "id": "d36d3b1e-8c7b-4feb-8a94-71234ac6a71c",
                            "name": "Ferrari Aventador",
                            "url": "https://sr.name"
                        }
                    ]
                },
                {
                    "id": "85db9da8-b655-4178-b6f9-2996659739cb",
                    "name": "Generic Concrete Gloves",
                    "url": "http://sr.name",
                    "children": [
                        {
                            "id": "efc60178-170f-49c8-bfaf-de289607118c",
                            "name": "Fiat Corvette",
                            "url": "http://sr.name"
                        },
                        {
                            "id": "e70e09f5-fd81-4e5b-adbc-07273aa698d9",
                            "name": "BMW Accord",
                            "url": "https://sr.info"
                        },
                        {
                            "id": "8856c9fa-33bf-4508-bdcb-772d71b8038b",
                            "name": "Porsche A8",
                            "url": "https://sr.org"
                        },
                        {
                            "id": "f5063b45-ace9-48ad-a093-6196ab384fca",
                            "name": "Chevrolet Focus",
                            "url": "https://sr.biz"
                        },
                        {
                            "id": "86680969-2c80-4c31-ab7f-3d1ff16bf93b",
                            "name": "Chrysler Grand Cherokee",
                            "url": "https://sr.biz"
                        },
                        {
                            "id": "4fcc5fe8-91cd-418f-b39a-467c0b067292",
                            "name": "Volkswagen V90",
                            "url": "http://sr.biz"
                        },
                        {
                            "id": "7a0e4896-2800-41ae-8ec7-4476c0b69fde",
                            "name": "Chrysler ATS",
                            "url": "https://sr.biz"
                        },
                        {
                            "id": "d77607a3-7af9-4f2a-afe6-a4d0843ad9a3",
                            "name": "Cadillac Impala",
                            "url": "https://sr.com"
                        }
                    ]
                }
            ]
        }
    ]
)
</script>
