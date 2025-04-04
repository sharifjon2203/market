CREATE FUNCTION add_two_values()
RETURNS INTEGER
AS $$
SELECT  count(region) from "Ucell" GROUP BY region;
$$
LANGUAGE SQL
IMMUTABLE
RETURNS NULL ON NULL INPUT;

---
CREATE OR REPLACE FUNCTION log_last_name_changes()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	IF NEW.last_name <> OLD.last_name THEN
		 INSERT INTO employee_audits(
      employee_id,last_name, old_last_name, changed_on)
		 VALUES(OLD.id,OLD.last_name,now());
	END IF;

	RETURN NEW;
END;
$$