create table bacteria(
	pk_id_doenca_bacteria int primary key not null auto_increment,
    nome_bacteria varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);



create table protozoario(
	pk_id_doenca_protozoario int primary key not null auto_increment,
    nome_protozoario varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table helminto(
	pk_id_doenca_helminto int primary key not null auto_increment,
    nome_helminto varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_cronica(
	pk_id_doenca_cronica int primary key not null auto_increment,
    nome_doenca_cronica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_autoimune(
	pk_id_doenca_autoimune int primary key not null auto_increment,
    nome_doenca_autoimune varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_genetica(
	pk_id_doenca_genetica int primary key not null auto_increment,
    nome_doenca_genetica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_mental(
	pk_id_doenca_mental int primary key not null auto_increment,
    nome_doenca_mental varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_alergica(
	pk_id_doenca_alergica int primary key not null auto_increment,
    nome_doenca_alergica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_nutricional(
	pk_id_doenca_nutricional int primary key not null auto_increment,
    nome_doenca_nutricional varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);

create table doenca_oftalmologica(
	pk_id_doenca_oftalmologica int primary key not null auto_increment,
    nome_doenca_oftalmologica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table doenca_otologica(
	pk_id_doenca_otologica int primary key not null auto_increment,
    nome_doenca_otologica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);

create table doenca_dermatologica(
	pk_id_doenca_dermatologica int primary key not null auto_increment,
    nome_doenca_dermatologica varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);


create table dst(
	pk_id_doenca_dst int primary key not null auto_increment,
    nome_dst varchar(50),
    fk_id_tratamento int not null,
    foreign key (fk_id_tratamento) references tratamento(pk_id_tratamento)
);

INSERT INTO dst(pk_id_DOENCA_dst, NOME_dst, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_dermatologica(pk_id_doenca_dermatologica, NOME_doenca_dermatologica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_otologica(pk_id_doenca_otologica, NOME_doenca_otologica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_oftalmologica(pk_id_doenca_oftalmologica, NOME_doenca_oftalmologica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_nutricional(pk_id_doenca_nutricional, NOME_doenca_nutricional, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_alergica(pk_id_doenca_alergica, NOME_doenca_alergica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_mental(pk_id_doenca_mental, NOME_doenca_mental, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_genetica(pk_id_doenca_genetica, NOME_doenca_genetica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_autoimune(pk_id_doenca_autoimune, NOME_doenca_autoimune, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO doenca_cronica(pk_id_doenca_cronica, NOME_doenca_cronica, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO bacteria(pk_id_DOENCA_bacteria, NOME_bacteria, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO protozoario(pk_id_DOENCA_protozoario, NOME_protozoario, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);
INSERT INTO helminto(pk_id_DOENCA_helminto, NOME_helminto, FK_ID_TRATAMENTO) VALUES(NULL, "dengue", 1);