class Tabelas {

    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAddress();
        this.criarTabelaService();
        this.criarTabelaProfessional();
        this.criarTabelaProfessionalService();
        this.criarTabelaUser();
        this.criarTabelaSchedule();
    }

    criarTabelaAddress() {
        const sql = 
        `
        create table if not exists address(
            address_id int primary key not null auto_increment,
            city varchar(50),
            district varchar(50),
            street_name varchar(50),
            house_number varchar(10)
        );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de address")
        })
    }

    criarTabelaService() {
        const sql = 
        `
        create table if not exists service(
            service_id int primary key not null auto_increment,
            img int,
            name varchar(50),
            color varchar(50),
            service_professional_id int
        );
        `;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de service")
        })
    }

    criarTabelaProfessional() {
        const sql = 
        `
        create table if not exists professional(
            professional_id int primary key not null auto_increment,
            img int,
            name varchar(45),
            company_name varchar(45),
            professional_service_id int,
            professional_address_id int unique
        );
        `;
        const alterSql =
        `ALTER TABLE professional
            ADD FOREIGN KEY (professional_address_id) REFERENCES address(address_id);
        `

        const alterSql2 = 
        `ALTER TABLE professional
        ADD FOREIGN KEY (professional_service_id) REFERENCES service(service_id);`
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            this.conexao.query(alterSql, (error) => {
                if(error){
                    console.log(error);
                    return;
                }
                this.conexao.query(alterSql2, (error) => {
                    if(error){
                        console.log(error);
                        return;
                    }
                })
            })
            console.log("Deu certo a tabela de professionals")
        })
    }

    criarTabelaProfessionalService() {
        const sql = 
        `
        create table if not exists professional_service(
            professional_service_id int primary key not null auto_increment,
            type varchar(30),
            price double(4,1),
            professionalService_professional_id int
        );
        `;

        const alterSql =
        `ALTER TABLE professional_service
        ADD FOREIGN KEY (professionalService_professional_id) REFERENCES professional(professional_id);`
        
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            this.conexao.query(alterSql, (error) => {
                console.log(error);
                return;
            })
            console.log("Deu certo a tabela de professional_service")
        })
    }

    

    criarTabelaUser() {
        const sql = 
        `
        create table if not exists user(
            user_id int primary key not null auto_increment,
            email varchar(30),
            senha varchar(30),
            nome varchar(30),
            numero_telefone varchar(30),
            user_address_id int
        );
        `;

        const alterSql =
        `ALTER TABLE user
            ADD FOREIGN KEY (user_address_id) REFERENCES address(address_id);`;

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            this.conexao.query(alterSql, (error) => {
                if(error){
                    console.log(error);
                    return;
                }
            })
            console.log("Deu certo a tabela de user")
        })
    }

    criarTabelaSchedule() {
        const sql = 
        `
        create table if not exists schedule(
            schedule_id int primary key not null auto_increment,
            day int,
            month int,
            year int,
            hour int,
            minute int,
            schedule_user_id int,
            schedule_professional_id int
        );
        `;

        const alterSql =
        `ALTER TABLE schedule
            ADD FOREIGN KEY (schedule_user_id) REFERENCES user(user_id);
        `;

        const alterSql2 = 
        `ALTER TABLE schedule
            ADD FOREIGN KEY (schedule_professional_id) REFERENCES professional(professional_id);`
        
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            this.conexao.query(alterSql, (error) => {
                if(error){
                    console.log(error);
                    return;
                }
                this.conexao.query(alterSql2, (error) => {
                    if(error){
                        console.log(error);
                        return;
                    }
                })
            })
            console.log("Deu certo a tabela de schedule")
        })
    }

}

module.exports = new Tabelas();



