import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("location", { schema: "airlinelebanon" })
export class Location {
  @PrimaryGeneratedColumn({ type: "int", name: "location_id" })
  locationId: number;

  @Column("varchar", { name: "location_name", nullable: true, length: 255 })
  locationName: string | null;

  @Column("varchar", { name: "continent", nullable: true, length: 255 })
  continent: string | null;

  @Column("varchar", { name: "imgsrc", nullable: true, length: 500 })
  imgsrc: string | null;
}
