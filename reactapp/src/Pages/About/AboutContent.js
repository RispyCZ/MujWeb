var i = 1;
const servers = [
    {
        index : i++,
        name: "Hlavní server",
        cpu: "Ryzen 3 3100@4,3Ghz",
        ram: "DDR4 32GB 3200Mhz",
        disk: "2x 512GB Nvme"
    },
    {
        index : i++,
        name: "Backup server",
        cpu: "Intel Xeon X3430",
        ram: "DDR3 8GB ECC",
        disk: "2x 1TB HDD",
    },
];

export default servers;